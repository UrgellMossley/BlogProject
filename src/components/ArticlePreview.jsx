import PropTypes from 'prop-types';
import stock from '../assets/img/stock.jpg'

function ArticlePreview({title,img,leadText}) {
  return (
    <article className='grid grid-cols-3 grid-rows-2 gap-2 border-solid border-slate-200 border-rounded'>
        <h3 className='hover:underline text-purple-800 text-3xl'>{title}</h3>
          <img className='col-span-2 row-span-2 object-fit' src={img} alt="placeholder" />
        <p className='text-2xl text-gray-200'>{leadText}</p>
    </article>
  )
}
ArticlePreview.propTypes = {
    title: PropTypes.string.isRequired,
    leadText: PropTypes.string.isRequired,
    img: PropTypes.isRequired
};


ArticlePreview.defaultProps = {
    title: 'Blog Post',
    img: stock,
    leadText: `This is a placeholder message..`
};


export default ArticlePreview;

