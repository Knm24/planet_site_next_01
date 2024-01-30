type RouteParams = { myplanetid: string };

type PlanetInfo = {
	geology: {
		content: 'string';
		source: 'string';
	};
	id: 'string';
	name: 'string';
	overview: {
		content: 'string';
		source: 'string';
	};
	radius: number;
	revolution: number;
	rotation: number;
	structure: {
		content: 'string';
		source: 'string';
	};
	temperature: number;
};

async function getData({params}: {params: RouteParams}) {
    const response = await fetch(`http://localhost:8081/api/v1/planets/${params.myplanetid}`);

   
    if (!response.ok) {
        await Promise.reject(new Error(`${response.status} - ${response.statusText}`));
    }
    const planetInfo: PlanetInfo = await response.json();

    return {
        planetInfo
    };

}

export default async function ListPage
({params}: {params: RouteParams}) {


    const id= params.myplanetid;
    const data = await getData({ params })

    console.log('data');
    console.log(data);

  return (
    <>List page ${id} --- 

{JSON.stringify(data)}

    </>

    );
  }
  