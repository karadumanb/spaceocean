export const ARTICLES_DATA: Array<IArticle> = [{
  title: 'Shred until swallowed',
  image_url: 'assets/images/article/swallow.jpg',
  description: `Some say programming is something so complex and you need to dive very deeply to comprehend. I agree that one person cannot cover everything. Because, the process of the development goes on decades with contribution of millions.<br />
  Specially nowadays, to develop something and to understand what you are doing are different things due to huge amount of helpers and simplifications.  However, better, most importantly qualified development always...

  <p>LET’S SEE HOW IT WORKS</p>

  Of course, it is not possible to get everything at the beginning. This is a journey we should embark upon with patient. On the way, we should collect clues and combine pieces of the puzzle as much as we can. For this purpose, we have to follow two principles that constitute the mechanistic philosophy. These principles are called reductionism and atomism.<br/>

  Reductionism: the practice of analysing and describing a complex phenomenon in terms of its simple or fundamental constituents.<br/>
  Atomism: a theoretical approach that regards something as interpretable through analysis into distinct, separable, and independent elementary components.<br/>

  So reductionism tells us everything can be represented as a combination of simpler things; but also there is an end to this reduction according to atomism. Therefore, we divide everything until we reach some point we understand.<br/><br/>

  Everything in life is just a different shade of each other. So is development. For example, if we ever wonder how linguistic communication works, first thing we realise is language is combination of sentences, sentences are made up of clauses, and clauses are just some words holding each other with some meaning. These words easily correspond to the facts that exist in the real world. Nouns -> objects, verbs -> actions, adjectives -> properties ….<br/>
  Thus, everything in the world can be represented as hierarchical structure. It seems to be perfectly clear that, what we do while communicating is create hierarchical structures of linguistic elements. Exactly how it is in programming. Creating elements correspond to the some views in DOM and combining it together. If we want to create a large and complex software applications, we have break everything down into small modules, then break down each modules to smaller ones, until we reach some simple software constructs, which we can program directly without any thinking.<br/>

  So that, all kind of crazy, large, complex software applications can be programmed easily with no greater skills needed for small applications.`,
  author: 'Baturay Karaduman',
}, {
  title: 'Running time',
  image_url: 'assets/images/article/binary.jpeg',
  description: `
    Any time we talk about an algorithm, we need to discuss its running time. Generally you want to choose the most efficient algorithm— whether you’re trying to optimize for time or space.<br/><br/>
    If we think of binary search, how much time do you save by using it? Well, the first approach was to check each number, one by one. If this is a list of 100 numbers, it takes up to 100 guesses.
    If it’s a list of 4 billion numbers, it takes up to 4 billion guesses. So the maximum number of guesses is the same as the size of the list.<br/>This is called linear time.<br/>
    Binary search is different. If the list is 100 items long, it takes at most 7 guesses. If the list is 4 billion items, it takes at most 32 guesses. Powerful, eh? Binary search runs in logarithmic time (or log time, as the natives call it).
    `,
  author: 'Baturay Karaduman'
}, {
  title: 'Lists or Arrays',
  image_url: 'assets/images/article/array_or_list.png',
  description: `
    For lists, it’s worth mentioning that insertions and deletions are O(1) time only if you can instantly access the element to be deleted. It’s a common practice to keep track of the first and last items in a linked list, so it would take only O(1) time to delete those.<br/><br/>
    Which are used more: arrays or lists?<br/>Obviously, it depends on the use case. But arrays see a lot of use because they allow random access. There are two different types of access: random access and sequential access. Sequential access means reading the elements one by one, starting
    at the first element. Linked lists can only do sequential access. If you want to read the 10th element of a linked list, you have to read the first 9 elements and follow the links to the 10th element. Random access means you can jump directly to the 10th element. You’ll frequently hear me say that arrays are faster at reads. This is because they provide random access. <br/><br/>A lot of use cases require random access, so arrays are used a lot. Arrays and lists are used to implement other data structures, too (coming up later in the book).
  `,
  author: 'Furkan Tanyol'
}]
