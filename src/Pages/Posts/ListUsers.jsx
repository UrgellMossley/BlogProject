import BlogHeader from "../../components/pageComponents/BlogHeader"
import Img from '../../assets/img/stock.jpg'
import Blurb from "../../components/pageComponents/Blurb"

function ListUsers() {
    //Static page with paragrpahs and code blocks

  return (
      <article className="md:px-36 xxs:px-6">
          <BlogHeader name={"List the Users!"} img={Img}/>
          <Blurb title={"Print out to the console, an ordered list of “active” users by increasing surname (in alphabetical order). Output the data in a string showing the user’s name and age to the whole number"} tag={"Constraints: Time limit of 30 minutes"} />
        <section className="px-3">
            <h3 className='font-bold text-xl my-2 py-1'>Details:</h3>

            <ul>
                  <li className="my-1"><span className="font-bold">Source: </span> Reddit</li>
                  <li className="my-1"> <span className="font-bold">Difficulty:</span> Real world interview question</li>
            </ul>
        </section>
        <section className="px-3">
            <h3>Example:</h3>
              <pre className='xxs:px-2 px-5 py-5 bg-slate-700 text-slate-200'>{`"TOM CAT is 80 years old."
"MICKEY MOUSE is 92 years old."
"JERRY THEMOUSE is 80 years old."`}</pre>
        </section>
        <section className="px-3">
              <p className='my-4 mx-2 text-lg whitespace-pre-line px-1 first-letter:font-bold first-letter:text-3xl'>If this is a real world interview question, I was pleasantly surprised how capable I was to handle it. A negative was that I took 35 minutes or so to solve it, which was 10 minutes over my desired time, but I feel with practice I can get past such issues.</p>
              <p className='my-4 mx-2 text-lg whitespace-pre-line px-1'> The main thing I learnt from this exercise is how I have to focus on reading the question properly! I wasted some time trying to sort the array by age which was unfortunately not what was requested!</p>
              <p className='my-4 mx-2 text-lg whitespace-pre-line px-1'>The easiest part of this was to separate the for name and surname, using the split() method. Passing in an empty space made that easy, and the rest was done by using index of 1 to pull out the surname.</p>
              <p className='my-4 mx-2 text-lg whitespace-pre-line px-1'>I then realised that I should sort the array FIRST, as this would make life all the easier. So I passed in my method of isolating the surname into a .sort() using localeCompare to sort these items alphabetically. I wasted a minute or so as I forgot to use the return keyword (to my chagrin. </p>   
              <p className='my-4 mx-2 text-lg whitespace-pre-line px-1'>Once that was resolved I had a new Array stored in my list constant, and used for each to build my console.log message.</p>      
              <p className='my-4 mx-2 text-lg whitespace-pre-line px-1'>Template strings made the message easy enough, I had fore and surnames down, but figuring out the ages was the tough part.</p>   
              <p className='my-4 mx-2 text-lg whitespace-pre-line px-1'>Luckily, my Google Fu skills came in clutch: <a className="underline text-orange-900" href="https://www.javatpoint.com/calculate-age-using-javascript" target="_blank" rel="noopener noreferrer">this</a> resource guided me through the process. Working through the steps of reformatting, and RE-reformatting the date, I eventually ended up with my age variable, and logged out the result. </p>
              <p className='my-4 mx-2 text-lg whitespace-pre-line px-1'>Check out my solution below!</p>
              <pre className='w-auto max-w-auto overflow-x-scroll mb-6 xxs:px-2 px-5 py-5 bg-slate-700 text-slate-200'>{`const USERS = [
    { name: 'Troy Barnes', dob: '1989-12-04', active: false },
    { name: 'Abed Nadir', dob: '1979-03-24', active: true },
    { name: 'Jeff Winger', dob: '1974-11-20', active: true },
    { name: 'Pierce Hawthorne', dob: '1944-11-27', active: false },
    { name: 'Annie Edison', dob: '1990-12-19', active: true },
    { name: 'Britta Perry', dob: '1980-10-19', active: true },
    { name: 'Shirley Bennett', dob: '1971-08-12', active: false },
    { name: 'Professor Professorson', dob: '1969-03-27', active: false },
    { name: 'Craig Pelton', dob: '1971-07-15', active: true }
];

const list = USERS.sort((a,b)=>{
    return (a.name.split(" ")[1]).localeCompare(b.name.split(" ")[1])
})

list.forEach((item)=>{  
    const surname = (item.name.split(" ")[1])
    const forname = (item.name.split(" ")[0])
    const dob = new Date(item.dob)
    const today = Date.now()
    const diff = today - dob
    const utcYear = new Date(diff).getUTCFullYear() 
    age = (utcYear - 1970)
    console.log({forname} {surname} is {age})
})`}</pre>
       </section>
    </article>
    
  )
}

export default ListUsers