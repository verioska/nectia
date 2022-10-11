import Skeleton from 'react-loading-skeleton';
import './HomeSkeleton.css'

const HomeSkeleton = () =>{
  return(
    <div className="table-skeleton">
      <div className="select-skeleton" >
        <div className="select-skeleton__modify">
         <Skeleton width="150px" height="30px" className="select-skeleton__modify--skeleton" />
        </div>
        <div className="select-skeleton__modify">
         <Skeleton width="150px" height="30px" className="select-skeleton__modify--skeleton" />
        </div>
      </div>
      <div className="table-skeleton__content">
        <Skeleton width="150px" height="30px" className="table-skeleton__poster"/>
      </div>
  </div>
  )
}

export default HomeSkeleton