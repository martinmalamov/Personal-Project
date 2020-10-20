const getNavigation = (user) => {
    const authLinks = [
        
        {
            title: "Publication",
            link: "/"
        },
        {
            title: "MakePost",
            link: "/make_post"
        },
        {
            title: "Profile",
            link: `/profile/${user && user.id}`
        },
        {
            title: "Logout",
            link: `/logout/${user && user.id}`
        }
    ]

    const guestLinks = [
        {
            title: "Publications",
            link: "/"
        },

        {
            title: "Sign_in",
            link: "/sign_in"
        },
        
        {
            title: "Sign_up",
            link: "/sign_up"
        }
    ]
    const loggedIn = user && user.loggedIn
    return loggedIn ? authLinks : guestLinks
}

export default getNavigation