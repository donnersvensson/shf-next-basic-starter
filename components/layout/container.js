export default function Container(props) {
  return (
    <>
      <div className="container">
        {props.children}
      </div>
      <style jsx>{`
        .container {
          width: 100%;
          max-width: ${props.maxWidth?props.maxWidth:'1500px'};
          background: ${props.background ? props.background : 'initial'};
          padding: ${props.padding ? props.padding : '0 1rem'};;
          margin: 0 auto;
          overflow-x: ${props.withOverflow ? 'initial' : 'hidden'};
        }
      `}</style>
    </>
  )
}
