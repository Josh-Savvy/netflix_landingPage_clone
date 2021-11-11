const FaqDropdown = ({ content, id, link, linkTitle, style }) => {
  return (
    
      <div className="faq-dropdown" id={id} style={style}>
        <h4>{content}</h4>
        <br />
        <a href={link}>{linkTitle}</a>
      </div>
  );
};

export default FaqDropdown;
