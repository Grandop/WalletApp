import visaLogo from '../../assets/cards/visa_white.png';
import mcLogo from '../../assets/cards/mc.png';
import { ConstantsColors } from '../../Constants/colors';
import portrait1 from '../../assets/portraits/1.jpg'
import portrait2 from '../../assets/portraits/2.jpg'
import portrait3 from '../../assets/portraits/3.jpg'

export const cardsData = [
  {
    id: 1,
    accountNo: '8381287312',
    balance: 20000.15,
    alias: 'Work Debit',
    logo: visaLogo,
  },
  {
    id: 2,
    accountNo: '3616523016',
    balance: 12000.01,
    alias: 'Work Debit',
    logo: mcLogo,
  },
  {
    id: 3,
    accountNo: '9812737155',
    balance: 5600.83,
    alias: 'Work Debit',
    logo: visaLogo,
  },
  {
    id: 4,
    accountNo: '8381287312',
    balance: 20000.15,
    alias: 'Work Debit',
    logo: mcLogo,
  },
];


export const transactionData = [
  {
    id: 1,
    title: 'Taxi',
    subtitle: 'Uber Car',
    amount: '-$86.00',
    date: '14 Sep 2021',
    art: {
      icon: 'car',
      background: ConstantsColors.primary,
    },
  },
  {
    id: 2,
    title: 'Shopping',
    subtitle: 'Ali express',
    amount: '-$286.00',
    date: '14 Sep 2021',
    art: {
      icon: 'cart',
      background: ConstantsColors.tertiary,
    },
  },
  {
    id: 3,
    title: 'Travel',
    subtitle: 'Emirates',
    amount: '-$586.00',
    date: '14 Aug 2021',
    art: {
      icon: 'airplane',
      background: ConstantsColors.accent,
    },
  },
];

export const sendMoneyData = [
  {
    id: 1,
    name: 'Coby Andoh',
    amount: '2450.56',
    backgorund: ConstantsColors.tertiary,
    img: portrait1,
  },
  {
    id: 2,
    name: 'Harleen Scot',
    amount: '4450.56',
    backgorund: ConstantsColors.primary,
    img: portrait2,
  },
  {
    id: 3,
    name: 'James Corbyn',
    amount: '6250.56',
    backgorund: ConstantsColors.accent,
    img: portrait3,
  },
  {
    id: 4,
    name: 'Coby Andoh',
    amount: '2450.56',
    backgorund: ConstantsColors.tertiary,
    img: portrait1,
  },
  {
    id: 5,
    name: 'Harleen Scot',
    amount: '4450.56',
    backgorund: ConstantsColors.primary,
    img: portrait2,
  },
  {
    id: 6,
    name: 'James Corbyn',
    amount: '6250.56',
    backgorund: ConstantsColors.accent,
    img: portrait3,
  },

];