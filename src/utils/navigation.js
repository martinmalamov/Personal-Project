const getNavigation = (email) => {
    const authLinks = [
        {
            title: "Tender",
            link: "/"
        },
        {
            title: "Make offer",
            link: "/make-offer"
        },
        {
            title: "Profile",
            link: `/profile/${email && email.id}`
        },
    ]

    const guestLinks = [
        {
            title: "Tender",
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

    return authLinks, guestLinks
}

export default getNavigation