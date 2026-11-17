import { getDb } from '../../../db';
import { registrations } from '../../../db/schema';
export async function POST(req: Request) {
 try {
  if(req.headers.get('origin')!==new URL(req.url).origin) return Response.json({error:'Origem inválida.'},{status:403});
  const raw=await req.text(); if(raw.length>6000) return Response.json({error:'Formulário muito longo.'},{status:400});
  const b=JSON.parse(raw); if(b.website) return Response.json({error:'Envio inválido.'},{status:400});
  const clean=(v:unknown,max:number)=>typeof v==='string'?v.trim().slice(0,max):'';
  const student=clean(b.student,100),birth=clean(b.birth,10),guardian=clean(b.guardian,100),phone=clean(b.phone,24),notes=clean(b.notes,1000);
  const today=new Date(), dob=new Date(birth+'T12:00:00Z');let age=today.getFullYear()-dob.getFullYear();if(today.getMonth()<dob.getMonth()||(today.getMonth()===dob.getMonth()&&today.getDate()<dob.getDate()))age--;
  if(student.length<3||guardian.length<3||!/^\d{4}-\d{2}-\d{2}$/.test(birth)||!Number.isFinite(age)||dob.toISOString().slice(0,10)!==birth||age<4||age>13||phone.replace(/\D/g,'').length<10||phone.replace(/\D/g,'').length>13||b.consent!==true) return Response.json({error:'Confira os dados. Atendimento do Sub-6 ao Sub-13; confirme a elegibilidade com a equipe.'},{status:400});
  const id=crypto.randomUUID();await getDb().insert(registrations).values({id,student,birth,guardian,phone,notes,status:'Novo interesse',created:new Date().toISOString(),consent:'Responsável autorizou contato e tratamento para pré-matrícula — v1'});
  return Response.json({ok:true,protocol:id.slice(0,8).toUpperCase()},{status:201});
 }catch {return Response.json({error:'Não foi possível enviar agora. Tente novamente em instantes.'},{status:500});}
}
