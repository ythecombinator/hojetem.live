import dayjs from 'dayjs';
import 'dayjs/locale/pt';

dayjs.locale("pt");

export const formatDate = (str: string) => {
  return dayjs(str).format("dddd, D [de] MMMM [às] HH:mm");
};
