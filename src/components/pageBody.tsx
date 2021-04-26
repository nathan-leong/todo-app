interface PageBodyProps {
  title: string;
}

 /**
 * A wrapper used for the body of any screen with the title passed in as a prop
 */
function PageBody(props: React.PropsWithChildren<PageBodyProps>) {
  return (
    <div>
      <h1 data-testid="page-title">{props.title}</h1>
      {props.children}
    </div>
  );
}

export default PageBody;