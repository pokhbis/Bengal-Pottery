import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, updateProfile, getIdToken, signOut } from "firebase/auth";
import initializeFirebase from "../Components/Login/Firebase/Firebase.init";


initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    //create new user
    const registerUser = (email, password, name, history) => {
        // console.log(email, password)
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                // console.log(userCredential.user);
                const newUser = { email, displayName: name };
                setUser(newUser);
                // save user to database
                saveUser(email, name, "POST");
                //send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name,
                }).then(() => {
                }).catch((error) => {
                });

                history.replace('/');
            })
            .catch((error) => {
                setAuthError(error.message);
                // console.log(error.message)
            })
            .finally(() => setIsLoading(false));
    }

    // login user
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));

    }

    //google signin
    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {

                const user = result.user;
                saveUser(user.email, user.displayName, "PUT");

                setAuthError('');
                const destination = location?.state?.from || '/';
                history.replace(destination);

            }).catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));
    }


    //observer user status if multiple pages are opened
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken)
                    })
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])

    useEffect(() => {
        fetch(`https://hidden-mountain-59218.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.admin);
                setAdmin(data.admin)
            })
        // .then(data => setAdmin(data.admin))
    }, [user.email])


    //logout user
    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));;
    }

    //save user info to db
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://hidden-mountain-59218.herokuapp.com/users', {
            method: method,
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
        // .then()

    }

    return {
        user,
        admin,
        token,
        isLoading,
        authError,
        registerUser,
        loginUser,
        signInWithGoogle,
        logout,
    }
}

export default useFirebase;