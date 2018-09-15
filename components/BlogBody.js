const BlogBody = props => (
    <article>
      <div className="blogbody">{props.children}</div>
      <style jsx>{`


.blogbody {
    padding: 4rem 4rem 1rem 4rem;
    max-width: 900px;
    margin: 0 auto;
    position: relative;
}

      @media (max-width: 36em) {
.blogbody {
    padding: 2rem 2rem 1rem 2rem;
}
}
      `}</style>
    </article>
  );

  export default BlogBody;
