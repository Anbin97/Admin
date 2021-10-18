import A from "@/api/axios"

export function getUser(data) {
  return A({
    url: "user/getUser",
    method: "GET",
    data,
    options: {
      headers: {}
    }
  })
}