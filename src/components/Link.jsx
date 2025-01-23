import AnchorLink from "react-anchor-link-smooth-scroll";

const Link = ({ page, selectedPage, setSelectedPage, isExternal, href }) => {
    const lowerCasePage = page?.toLowerCase()
    const classes = `${
        selectedPage === lowerCasePage ? "text-green" : ""
      } hover:text-green transition duration-500`
    
    if (isExternal) {
        return (
          <a
            className={classes}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {page}
          </a>
        );
      }
      return (
        <AnchorLink
          className={classes}
          href={`#${lowerCasePage}`}
          onClick={() => setSelectedPage(lowerCasePage)}
        >
          {page}
        </AnchorLink>
      )
}
export default Link;