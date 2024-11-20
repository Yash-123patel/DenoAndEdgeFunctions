/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `wrangler dev src/index.ts` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `wrangler deploy src/index.ts --name my-worker` to deploy your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export interface Env {
	// Example binding to KV. Learn more at https://developers.cloudflare.com/workers/runtime-apis/kv/
	// MY_KV_NAMESPACE: KVNamespace;
	//
	// Example binding to Durable Object. Learn more at https://developers.cloudflare.com/workers/runtime-apis/durable-objects/
	// MY_DURABLE_OBJECT: DurableObjectNamespace;
	//
	// Example binding to R2. Learn more at https://developers.cloudflare.com/workers/runtime-apis/r2/
	// MY_BUCKET: R2Bucket;
	//
	// Example binding to a Service. Learn more at https://developers.cloudflare.com/workers/runtime-apis/service-bindings/
	// MY_SERVICE: Fetcher;
}

interface Employee{
	name:string;
	age:number;
	salary:number;
}

export default{
	async fetch(req:Request):Promise<Response>{

		const url=new URL(req.url);
		const path=url.pathname;

		switch (path) {
			case '/':
				return handleHomePage();
				

			case '/employee':
				return handleEmployee();
		
			default:
				return new Response("Url Not Found!",{status:400})
		}
	}
}

async function handleHomePage():Promise<Response>{
      return new Response("Welcome to home page",{status:200,
		headers: { 'Content-Type': 'text/plain' }
	  });;
}

async function handleEmployee():Promise<Response>{
	const employee:Employee={name:"Yash Patel",age:22,salary:0.0};
	return new Response(JSON.stringify(employee),{status:200,
		headers:{'content-type':'application/json'}
	});
}