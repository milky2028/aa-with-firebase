import { ref, onMounted, onUnmounted } from '@vue/composition-api';

function getMatch(media: string) {
  return window.matchMedia(media).matches;
}

export default function useMatchMedia() {
  const isDesktop = ref(getMatch('(min-width: 991px)'));
  const isTablet = ref(getMatch('(min-width: 767px'));
  const isPhone = ref(getMatch('min-width: 479px'));

  const handler = () => {
    isDesktop.value = getMatch('(min-width: 991px)');
    isTablet.value = getMatch('(min-width: 767px)');
    isPhone.value = getMatch('(min-width: 479px)');
  };

  onMounted(() => window.addEventListener('resize', handler));
  onUnmounted(() => window.removeEventListener('resize', handler));

  return { isDesktop, isTablet, isPhone };
}
