import React from 'react'
import img from '../../assets/img/howMuch.jpg'
import BlogHeader from '../../components/BlogHeader'
function HowMuch() {
  return (

    <div className='flex flex-col h-fit items-center justify-apart'>
          <BlogHeader img={img} name={"How Much is True?"}/>
      <section className='px-3 mb-4'>
        <h4 className='xxs:text-center sm:text-left font-bold text-2xl text-purple-600'>"Create a function which returns the number of true values there are in an array."</h4>
        <p className='text-center'>Notes: Return 0 if given an empty array. All array items are of the type bool (true or false).</p>
      </section>
      
      <section className='xxs:w-screen sm:w-auto px-3 max-w-screen'>
        <p className='first-letter:font-bold first-letter:text-3xl mb-4 text-lg whitespace-pre-line px-1'>I recently discovered coding challenges, and have settled upon the platform "Edabit". Simple, well designed, and easy to navigate-Edabit has become a
          resouce chock full of reasonably challenging problems for me to solve.</p>
        
        <p className='mb-4 text-lg whitespace-pre-line px-1'>I usually use forEach when needing to trawl through an array. It was one of the first methods that I learnt and when combined with a terniary operater
          is a powerful tool IMO.
          My solution came down to:</p>
        <div className="xxs:px-2 px-5  xxs:overflow-x-scroll sm:overflow-x-hidden py-5  h-36 bg-slate-700 text-slate-200">
          <pre className='text-left whitespace-pre-wrap w-auto inline-block text-justify'>{"const countTrue = (arr) => { "}</pre>
          <pre className='text-left whitespace-pre-wrap w-auto inline-block text-justify'>{"   let count = 0 arr.forEach((value) => value === true ? count++ : null)"}</pre>
          <pre className='text-left whitespace-pre-wrap w-auto inline-block text-justify'>{"   return count"}</pre>
          <pre className='text-left whitespace-pre-wrap w-auto inline-block text-justify'>{"}"}</pre>
        </div>

        <p className='mb-4 text-lg whitespace-pre-line px-1'>By creating a variable inside the countTrue variable, I was able to modify it everytime my condition came true.
          It's easy to read and works quickly and relativley well. </p>
        <p className='mb-4 text-lg whitespace-pre-line px-1'>I thought my solution was elegant and effective...until I saw the top rated solution online:</p>
        <div className="xxs:px-2 xxs:overflow-x-scroll sm:overflow-x-hidden py-5  h-15 bg-slate-700 text-slate-200">
          <pre className='whitespace-nowrap  w-auto inline-block'>{"const countTrue = r => r.filter(Boolean).length"}</pre>
        </div>
        <p className='mb-4 text-lg whitespace-pre-line px-1'>According to MDN: The filter() method creates a new array with all elements that pass the test implemented by the provided function.</p>

        <p className='mb-4 text-lg whitespace-pre-line px-1'> By passing in the conditional "Boolean" we create an array of true values (if the value of r[index] is false then it wont resolve as true!)
          then by simply using .length() on r (the newly created array) to return the number of true values in the array
          </p>
        </section>
          
    </div>
  )
}

export default HowMuch