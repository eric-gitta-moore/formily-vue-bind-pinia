import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useBookStore = defineStore('book', () => {
  const bookCenter = ref({
    centerId: 'EU1',
    bookList: [
      {
        id: '1',
        name: 'Eduardo',
        size: 'A4',
        previewImgs: [
          {
            id: 'xx',
            coverUrl: 'http://example.com',
            desc: 'this is decs',
          },
        ],
      },
    ],
  });
  const flattenImgs = computed(() =>
    bookCenter.value.bookList.flatMap((book, bookIdx) =>
      book.previewImgs.map((img, imgIdx) => ({
        ...img,
        bookId: book.id,
        bookIdx,
        imgId: img.id,
        imgIdx,
      }))
    )
  );

  return { bookCenter, flattenImgs };
});
