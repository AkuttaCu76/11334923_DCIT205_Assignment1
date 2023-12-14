
import { Routes, Route } from 'react-router-dom';
import Contact from './Contact';

const Question = () => {
  return (
    <>
   
    <section className="max-w-xl mx-auto py-20 px-4">
      <h1 className="text-center tracking-widest uppercase font-bold mb-6">
        GRADE REPORTING FAQ
        </h1>
          <section className="grid grid-cols-1 gap-8">
          <div className="border border-gray-500 rounded-lg bg-white">
      <article className="flex  p-4 font-bold lg:p-6">
        <h2>Question: </h2><br />
          <p> Where do I go when my grades are not showing?</p>
          </article>
        <article className="border-t border-gray-500 p-4 lg:p-6">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Nesciunt similique omnis voluptatem sed porro placeat ipsam 
            doloremque quisquam laboriosam dolore ipsa, tenetur mollitia ducimus iure ad impedit 
            magni quam repellat eligendi? Mollitia quam aliquid atque placeat
             sint autem ratione? Assumenda?
          </p>
      </article>
    </div>
     </section>
    </section>
    <div className='font-bold '>
      <h3 className='text-bold text-center mb-0'>Fill the form Below if Your Question is Not Answered</h3>
    <Routes>
      <Route path='/Contact' element={ <Contact />} />
    </Routes>
    </div>
    </>
  );
}

export default Question;
