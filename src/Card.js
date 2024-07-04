

function Card({data}) {
 
  return <>
    <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{data.plan}</h5>
            <h6 className="card-price text-center">${data.price}<span className="period">/month</span></h6>
             
            <ul className="fa-ul">
              <li className={data.isusers?"":"text-muted"}><span className="fa-li"><i className={data.isusers?"fas fa-check":"fas fa-times"}></i></span>{data.users}</li>
              <li className={data.isstorage?"":"text-muted"}><span className="fa-li"><i className={data.isstorage?"fas fa-check":"fas fa-times"}></i></span>{data.storage}</li>
              <li className={data.ispublicProject?"":"text-muted"}><span className="fa-li"><i className={data.ispublicProject?"fas fa-check":"fas fa-times"}></i></span>{data.publicProjects}</li>
              <li className={data.iscommunityAccess?"":"text-muted"}><span className="fa-li"><i className={data.iscommunityAccess?"fas fa-check":"fas fa-times"}></i></span>{data.communityAccess}</li>
              <li className={data.isprivateProject?"":"text-muted"}><span className="fa-li"><i className={data.isprivateProject?"fas fa-check":"fas fa-times"}></i></span>{data.privateProjects}</li>
              <li className={data.isphoneSuppor?"":"text-muted"}><span className="fa-li"><i className={data.isphoneSuppor?"fas fa-check":"fas fa-times"}></i></span>{data.phoneSupport}</li>   
              <li className={data.issubdomain?"":"text-muted"}><span className="fa-li"><i className={data.issubdomain?"fas fa-check":"fas fa-times"}></i></span>{data.subDomine} </li>
              <li className={data.isreport?"":"text-muted"}><span className="fa-li"><i className={data.isreport?"fas fa-check":"fas fa-times"}></i></span>{data.report}  </li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>

  </>
}

export default Card;
