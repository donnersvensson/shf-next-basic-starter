export default function Spacer(props) {
  return (
    <>
      <div className={'spacer-'+props.size+' spacer'}></div>
      <style jsx>{`
        .spacer-xs {
          width:0.5rem;
          height:0.5rem;
        }
        .spacer-s {
          width:1rem;
          height:1rem;
        }
        .spacer-m {
          width:2rem;
          height:2rem;
        }
        .spacer-ml {
          width:3rem;
          height:3rem;
        }
        .spacer-l {
          width:4rem;
          height:4rem;
        }
        .spacer-xl {
          width:8rem;
          height:8rem;
        }
        .spacer-xxl {
          width:16rem;
          height:16rem;
        }
        @media screen and (max-width: 767px) {
          .spacer {
            max-height: 4rem;
          }
        }
      `}</style>
    </>
  )
}
