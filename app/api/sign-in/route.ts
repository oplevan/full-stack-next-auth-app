import prisma from "@/lib/prisma";
import * as bcrypt from "bcrypt";

interface RequestBody {
  username: string;
  password: string;
}
export async function POST(req: Request, res: Response) {
  const body: RequestBody = await req.json();

  const user = await prisma.user.findFirst({
    where: {
      email: body.username,
    },
  });

  if (user && (await bcrypt.compare(body.password, user.password))) {
    const { password, ...userWithoutPassword } = user;

    return new Response(JSON.stringify(userWithoutPassword));
  } else {
    return new Response(JSON.stringify({ error: "Invalid username or password" }));
  }
}
