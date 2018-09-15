const BlogHero = props => (
    <header>
      <div className="bloghero">{props.children}</div>
      <style jsx>{`
        .bloghero {
            padding: 5rem 0;
            max-width: 60rem;
            margin: auto;
            text-align: left;
        }
      `}</style>
    </header>
  );
  
  export default BlogHero;
  