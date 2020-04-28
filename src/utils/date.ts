import dayjs from 'dayjs';
import 'dayjs/locale/pt';

dayjs.locale("pt");

export const formatDate = (str: string) => {
  return dayjs(str).format("dddd, D MMMM");
};

export const formatTime = (str: string) => {
  return dayjs(str).format("H:mm");
};
