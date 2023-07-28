interface TodoItem {
  id: string;
  name: string;
  created: string;
  category: string;
  content: string;
  date: string[];
  archive: boolean;
}

interface TodoState {
  items: TodoItem[];
  isLoading: boolean;
  error: boolean;
}

interface ModalState {
  modalActive: boolean;
  modalContent: any; // Замените any на тип содержимого модального окна, если это возможно
}

interface CategorySelectState {
  categoryList: string[];
}

interface ArchivePageState {
  archivePage: boolean;
}


export interface RootState {
  todo: TodoState;
  modal: ModalState;
  categorySelect: CategorySelectState;
  archivePage: ArchivePageState;
}
