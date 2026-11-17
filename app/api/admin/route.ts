import { getChatGPTUser } from '../../chatgpt-auth';
import { getDb } from '../../../db';
import { registrations } from '../../../db/schema';
import { desc, eq } from 'drizzle-orm';
async function allowed(){ const u=await getChatGPTUser();const email='vendasalcapone435@gmail.com';return !!email&&u?.email.toLowerCase()===email.toLowerCase(); }
export async function GET(){if(!await allowed())return Response.json({error:'Acesso restrito à administração.'},{status:403});return Response.json(await getDb().select().from(registrations).orderBy(desc(registrations.created)),{headers:{'Cache-Control':'no-store'}});}
export async function PATCH(req:Request){if(!await allowed()||req.headers.get('origin')!==new URL(req.url).origin)return Response.json({error:'Acesso negado.'},{status:403});try{const {id,status}=await req.json() as {id:string;status:string};if(typeof id!=='string'||!['Novo interesse','Em atendimento','Aula agendada','Matriculado'].includes(status))return Response.json({error:'Status inválido'},{status:400});await getDb().update(registrations).set({status}).where(eq(registrations.id,id));return Response.json({ok:true});}catch{return Response.json({error:'Não foi possível atualizar.'},{status:500});}}
