
  interface Book      {
    title: string;
            author: string;
        publishedYear: number;
}


function toggleReadStatus(book: Book): Book & { isRead: boolean } {
return {
           ...book,
                  isRead: true
        };
}

const myBook: Book = {
    title: "TypeScript Guide",
          author: "Jane Doe",
      publishedYear: 2024
};


//console.log(toggleReadStatus(myBook));

