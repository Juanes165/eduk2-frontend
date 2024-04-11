import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"; 

const apiURL = process.env.NEXT_PUBLIC_API_URL;

export async function linkGoogle() {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log("real", user.getIdToken());

    const data = {
      uid: user.uid,
      name: user.displayName,
      email: user.email,
      grade: "",
      photoURL: user.photoURL,
    };
    console.log("data", data);
    const response = await fetch(apiURL + "auth/v1/googleauth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(response);
    const data_1 = await response.json();
  } catch (error) {
    console.error("Error al enviar los datos de autenticación:", error);
  }
}