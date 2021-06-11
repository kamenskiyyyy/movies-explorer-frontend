import './NavTab.css';

function NavTab(props) {
  return <a href={props.to} className='navTab_item' id={props.size}>
    {props.name}
  </a>
}

export default NavTab;
