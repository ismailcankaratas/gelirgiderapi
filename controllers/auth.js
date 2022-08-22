export const auth = async (req, res) => {
    try {
        if (!req.session.user) {
            return res.status(401).json({ error: "Authentication required." });
        }
        return res.status(200).json(req.session.user);
    } catch (error) {
        console.log(error);
        return res.status(400).json({ error: error })
    }
}

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!(username === "ismailcankaratas" && password === "18689278740")) {
            return res.status(400).json({ error: "Invalid creds" });
        }
        const user = { username, admin: true };
        req.session.user = user;

        return res.status(200).json(user);
    } catch (error) {
        console.log(error);
        return res.status(400).json({ error: error })
    }
}


export const logout = async (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log(err);
            return res.send(false);
        }

        res.clearCookie("sessid");
        return res.send(true);
    })
}