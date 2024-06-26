interface Parent {
  name: string;
  deceased: boolean;
}

interface Person {
  name: string;
  relation: string;
  father: Parent;
  mother: Parent;
}

interface ImageSection {
  image: File | null;
  contents: string;
}

interface Contacts {
  groom: { name: string; phoneNumber: string; relation: string }[];
  bride: { name: string; phoneNumber: string; relation: string }[];
}

interface Accounts {
  groom: { name: string; bankName: string; accountNumber: string }[];
  bride: { name: string; bankName: string; accountNumber: string }[];
}

export interface Invitation {
  cover: ImageSection;
  thumbnail: ImageSection & { title: string };
  article: {
    title: string;
    contents: string;
  };
  booking: {
    date: string;
    time: string;
    dateType: boolean;
  };
  place: {
    name: string;
    detail: string;
    address: string;
    latitude: null | number;
    longitude: null | number;
  };
  transport: { kind: string; detail: string }[];
  gallery: File[];
  groom: Person;
  bride: Person;
  guestbookCheck: boolean;
  contacts: Contacts;
  accounts: Accounts;
  priority: { name: string; priority: number }[];
}

const PERSON: Person = {
  name: '',
  relation: '',
  father: { name: '', deceased: false },
  mother: { name: '', deceased: false },
};

const IMAGE_SECTION: ImageSection = {
  image: null,
  contents: '',
};

const CONTACTS: Contacts = {
  groom: [{ name: '', phoneNumber: '', relation: '' }],
  bride: [{ name: '', phoneNumber: '', relation: '' }],
};

const ACCOUNTS: Accounts = {
  groom: [{ name: '', bankName: '', accountNumber: '' }],
  bride: [{ name: '', bankName: '', accountNumber: '' }],
};

const INVITATION = {
  cover: { ...IMAGE_SECTION },
  thumbnail: { ...IMAGE_SECTION, title: '' },
  article: {
    title: '',
    contents: '',
  },
  booking: {
    date: '',
    time: '',
    dateType: true,
  },
  place: {
    name: '',
    detail: '',
    address: '',
    latitude: null,
    longitude: null,
  },
  transport: [{ kind: '', detail: '' }],
  gallery: [],
  groom: { ...PERSON },
  bride: { ...PERSON },
  guestbookCheck: false,
  contacts: { ...CONTACTS },
  accounts: { ...ACCOUNTS },
  priority: [
    { name: 'article', priority: 1 },
    { name: 'weddingDate', priority: 2 },
    { name: 'weddingPlace', priority: 3 },
    { name: 'transport', priority: 4 },
    { name: 'gallery', priority: 5 },
    { name: 'contact', priority: 6 },
    { name: 'account', priority: 7 },
    { name: 'thumbnail', priority: 8 },
  ],
} satisfies Invitation;

export default {
  PERSON,
  IMAGE_SECTION,
  INVITATION,
  CONTACTS,
  ACCOUNTS,
};
