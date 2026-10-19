
const greeting = document.getElementById("user-greeting");
const signInLink = document.getElementById("sign-in-link");
const logoutLink = document.getElementById("logout-link");

async function updateHeader() {
    const { data, error } = await supabaseClient.auth.getSession();

    if (error) {
        console.error(error.message);
        return;
    }

    const user = data.session?.user;

    if (user) {
        const name =
            user.user_metadata?.first_name ||
            user.email?.split("@")[0] ||
            "there";

        greeting.textContent = `Hi, ${name}!`;
        signInLink.style.display = "none";
        logoutLink.style.display = "inline-flex";
    } else {
        greeting.textContent = "";
        signInLink.style.display = "inline-block";
        logoutLink.style.display = "none";
    }
}

logoutLink.addEventListener("click", async () => {
    const { error } = await supabaseClient.auth.signOut();

    if (error) {
        alert(error.message);
        return;
    }

    await updateHeader();
});

updateHeader();
