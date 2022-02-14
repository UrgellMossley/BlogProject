import PropTypes from 'prop-types';
import stock from '../assets/img/stock.jpg'

function ArticlePreview({title,img,leadText,date}) {
  return (
      <article className='relative border-solid xxs:px-0 xs:px-5 sm:px-0 border-slate-200 border-rounded '>
          <h3 className='absolute z-10 top-5 hover:underline text-slate-200 text-3xl px-3'>{title}</h3>
          <img className='col-span-3  z-0 row-span-2 object-fit  hover:brightness-50' src={img} alt="placeholder" />
          <p className='absolute z-10 bottom-5 text-2xl text-slate-200 px-3'>{leadText}</p>
          <small className='text-slate-200 absolute bottom-10 py-2 px-3'>{date}</small>
    </article>
  )
}
ArticlePreview.propTypes = {
    title: PropTypes.string.isRequired,
    leadText: PropTypes.string.isRequired,
    img: PropTypes.isRequired,
    date: PropTypes.string.isRequired
};


ArticlePreview.defaultProps = {
    title: 'Blog Post',
    img: stock,
    leadText: `This is a placeholder message..`,
    date: `Febuaray 14/2/22`
};


export default ArticlePreview;

