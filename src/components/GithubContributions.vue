<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

type Contribution = {
  date: string;
  count: number;
  level: number;
};

type Labels = {
  less: string;
  more: string;
  loading: string;
  error: string;
  viewProfile: string;
};

const props = defineProps<{
  username: string;
  labels: Labels;
}>();

const contributions = ref<Contribution[]>([]);
const isLoading = ref(true);
const hasError = ref(false);

const apiUrl = computed(
  () =>
    `https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(props.username)}?y=last`,
);

const profileUrl = computed(() => `https://github.com/${props.username}`);

const weeks = computed(() => {
  const byDate = new Map(contributions.value.map((item) => [item.date, item]));
  if (!contributions.value.length) return [];

  const lastContribution = contributions.value[contributions.value.length - 1];
  const lastDate = new Date(`${lastContribution.date}T00:00:00`);
  const firstDate = new Date(lastDate);
  firstDate.setDate(firstDate.getDate() - 363);
  firstDate.setDate(firstDate.getDate() - firstDate.getDay());

  return Array.from({ length: 53 }, (_, weekIndex) =>
    Array.from({ length: 7 }, (_, dayIndex) => {
      const date = new Date(firstDate);
      date.setDate(firstDate.getDate() + weekIndex * 7 + dayIndex);
      const dateKey = date.toISOString().slice(0, 10);
      return byDate.get(dateKey) ?? { date: dateKey, count: 0, level: 0 };
    }),
  );
});

const monthLabels = computed(() =>
  weeks.value.reduce<{ label: string; column: number }[]>((labels, week, index) => {
    const firstDay = week[0];
    const month = new Date(`${firstDay.date}T00:00:00`).toLocaleDateString(
      undefined,
      { month: "short" },
    );
    const lastLabel = labels[labels.length - 1];
    if (index === 0 || lastLabel?.label !== month) {
      labels.push({ label: month, column: index + 1 });
    }
    return labels;
  }, []),
);

function formatDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

onMounted(async () => {
  const controller = new AbortController();

  try {
    const response = await fetch(apiUrl.value, { signal: controller.signal });
    if (!response.ok) throw new Error("Contribution request failed");
    const data = await response.json();
    contributions.value = Array.isArray(data.contributions)
      ? [...data.contributions].sort((a, b) => a.date.localeCompare(b.date))
      : [];
    hasError.value = contributions.value.length === 0;
  } catch {
    hasError.value = true;
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <div class="github-contributions" aria-live="polite">
    <div v-if="isLoading" class="github-contributions-loading">
      <span class="contribution-skeleton" v-for="n in 140" :key="n"></span>
      <span class="sr-only">{{ labels.loading }}</span>
    </div>

    <div v-else-if="hasError" class="github-contributions-error">
      <p>{{ labels.error }}</p>
      <a :href="profileUrl" target="_blank" rel="noreferrer">
        {{ labels.viewProfile }}
      </a>
    </div>

    <template v-else>
      <div class="github-months" aria-hidden="true">
        <span
          v-for="month in monthLabels"
          :key="`${month.label}-${month.column}`"
          :style="{ gridColumn: month.column }"
        >{{ month.label }}</span>
      </div>
      <div class="github-calendar-wrap">
        <div class="github-weekdays" aria-hidden="true">
          <span></span>
          <span>Mon</span>
          <span></span>
          <span>Wed</span>
          <span></span>
          <span>Fri</span>
          <span></span>
        </div>
        <div class="github-calendar" role="grid" :aria-label="labels.loading">
          <div v-for="(week, weekIndex) in weeks" :key="weekIndex" class="github-week">
            <span
              v-for="day in week"
              :key="day.date"
              class="contribution-cell"
              :class="`level-${Math.min(day.level, 4)}`"
              role="gridcell"
              :aria-label="`${day.count} contributions on ${formatDate(day.date)}`"
              :title="`${day.count} contributions on ${formatDate(day.date)}`"
            ></span>
          </div>
        </div>
      </div>
      <div class="github-legend">
        <span>{{ labels.less }}</span>
        <span class="contribution-cell level-0"></span>
        <span class="contribution-cell level-1"></span>
        <span class="contribution-cell level-2"></span>
        <span class="contribution-cell level-3"></span>
        <span class="contribution-cell level-4"></span>
        <span>{{ labels.more }}</span>
      </div>
    </template>
  </div>
</template>
