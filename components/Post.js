function Post({ Date, Image, Title }) {
    let { file, description } = Image
  
    return (
      <div className="post">
        <img alt={description} src={`https:${file.url}`} />
        <div className="description">{description}</div>
        <div className="text">
          <h2>{Title}</h2>
          <h3>{Date.substring(0, 10)}</h3>
        </div>
      </div>
    )
  }
  
export default Post