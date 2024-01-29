
type RouteParams = { myplanetid: string };


export default function ListPage
({params}: {params: RouteParams}) {

    const id= params.myplanetid;


  return (
    <>List page ${id} --- 
    </>

    );
  }
  