import img from '../../assets/img/reverseInteger.jpg';
import Blurb from '../../components/pageComponents/Blurb';
import BlogHeader from '../../components/pageComponents/BlogHeader';
import IntegerImg from '../../assets/img/integerResults.png'
function ReverseInteger() {
  //Static page with paragrpahs and code blocks

  return (
    <article className="md:px-36 xxs:px-6" >
          <BlogHeader img={img} name={"Reverse Integer"} />
          <Blurb title={`Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.`} tag={`Assume the environment does not allow you to store 64-bit integers (signed or unsigned).`}/>
        <section className='px-3'>
              <h3 className='font-bold text-xl my-2 py-1'>Details:</h3>
            <ul>
                  <li className='my-1'><span className='font-bold'>Source:</span> <a className='text-purple-700 underline' href="https://leetcode.com/problems/reverse-integer">LeetCode</a></li>
                  <li className='my-1'><span className='font-bold'>Difficulty:</span> Medium</li>
            </ul>
        </section>
          <section className='px-3'>
            <h3 className='font-bold text-xl my-2 py-1'>Example 1:</h3>
              <pre className='xxs:px-2 px-5 py-5 bg-slate-700 text-slate-200'>{`Input: x = 123
Output: 321`}</pre>
            
            <h3 className='font-bold text-xl my-2 py-1'>Example 2:</h3>
              <pre className='xxs:px-2 px-5 py-5 bg-slate-700 text-slate-200'>{`Input: x = -123
Output: -321
`}</pre>
            <h3 className='font-bold text-xl my-2 py-1'>Example 3:</h3>
              <pre className='xxs:px-2 px-5 py-5 bg-slate-700 text-slate-200'>{`Input: x = 120
Output: 21
`}</pre>

              <h3 className='font-bold text-xl my-2 py-1'>Constraints:</h3>
              <pre className='xxs:px-2 px-5 py-5 bg-slate-700 text-slate-200'>{`-231 <= x <= 231 - 1`}</pre>

        </section>
        <section className='px-3'>
              <p className='my-4 mx-2 text-lg whitespace-pre-line px-1 first-letter:font-bold first-letter:text-3xl'>This challenge was quite fun! I had played with the Array.protype.reverse() method in a personal project so wanted to utilise it to solve this issue but I was getting an error when trying to test solutions (more on this later), and ran into a forum post that stated that Higher Order array methods were not to be accepted on the platform.</p>
              <p className='my-4 mx-2 text-lg whitespace-pre-line px-1'>I took this as an additional challenge and decided to replicate the method in the solution which did add an extra layer of complexity.</p>
              <p className='my-4 mx-2 text-lg whitespace-pre-line px-1'>Initially, I created my function, and declared my max/min values as stated in the description, as well as created an array from the number using the number.toString() method and split() making sure to pass in an empty string to convert the string to an array of each of its characters.</p>
              <p className='my-4 mx-2 text-lg whitespace-pre-line px-1'>From there I used a For Loop to iterate though the array items and push them in reverse order into a “new array”I then called parseInt on the Joined up return value passing in a radix of 10 to make sure that was a number.</p>
              <p className='my-4 mx-2 text-lg whitespace-pre-line px-1'>I did have to accommodate negative numbers, as a few test submissions were failing on that front. To do that I just checked if the original number argument was negative, and if so used a conditional to multiply my result by -1.</p>
              <p className='my-4 mx-2 text-lg whitespace-pre-line px-1'>Finally, I checked if the return value was within the constraints provided by the challenge’s description using another ternary expression. If the number was in range I returned the reversed number.</p>
              <p className='my-4 mx-2 text-lg whitespace-pre-line px-1'>See the full answer below!</p>
              <h3 className='font-bold text-xl my-2 py-1'>Answer:</h3>
              <pre className='w-auto max-w-auto overflow-x-scroll xxs:px-2 px-5 py-5 bg-slate-700 text-slate-200'>{`const reverse =(num)=>{
    let normaliser;
    num < 0 ? normaliser = -1: normaliser = 1;
    const min = -2147483648;
    const max = 2147483647;
    const numArr = num.toString().split('');

    const arrReverser= (arr)=>{
        const newArr = [];
        for (i = arr.length -1; i>-1; i--){
            newArr.push(arr.slice(i)[0]);
        };

    return  parseInt(newArr.join(''),10) * normaliser;
    };
 let reversed = arrReverser(numArr);
 return reversed < min || reversed > max ? reversed = 0 : reversed;

};


`}</pre>
              <p className='my-4 mx-2 text-lg whitespace-pre-line px-1'>NB: I’m not sure if LeetCode is banning higher order arrays, I actually think I was getting an error as my Function was not explicitly called reverse, which is a bit embarrassing!</p>
              <p className='my-4 mx-2 text-lg whitespace-pre-line px-1'>The good news is that my solution was pretty performant, completing faster than a big chunk of users, and used a bit less memory too :</p>
            <article className='flex items-center justify-center'>
                  <img loading="lazy" className="mt-2 mb-6" src={IntegerImg} alt="image of algorithm results" />
            </article>

        </section>

    </article>
  )

}
export default ReverseInteger