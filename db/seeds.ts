import db from "./index"
//import { hashedPassword } from "app/auth/auth-utils"
/*
 * This seed function is executed when you run `blitz db seed`.
 *
 * Probably you want to use a library like https://chancejs.com
 * or https://github.com/Marak/Faker.js to easily generate
 * realistic data.
 */
const seed = async () => {
  //const password = await hashedPassword("password!!")
  const email = "hoge@example.com".toLowerCase()
  const userId = (
    await db.user.create({
      data: { email, role: "user" },
      select: { id: true, name: true, email: true, role: true },
    })
  ).id

  await db.category.create({
    data: {
      name: "category1",
      memos: {
        create: [
          {
            title: "memo1",
            body: "hogehoge",
          },
          {
            title: "memo2",
            body: "fugafuga",
          },
        ],
      },
    },
  })
}

export default seed
