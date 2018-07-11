import React from "react";
import "./Navbar.css";

const Navbar = (props) => (
    
    <div className="nav">
        <div className="profile">
            <img src={props.profileImage} alt="profiles"/>
            <p>{props.displayName}</p>
        </div>
       
        <div className="navigation">
            <label htmlFor="toggle">&#9776;</label>
            <input type="checkbox" id="toggle"/>
            <div className="menu">
                <a href="/">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAUjSURBVHhe7Z156C5THId/tlwSSvdaswtda/yBsiQ7f9nikrqWP4hCQkpJKSFZIoQSikgpWUqILFmyFCJZSlmzy748n5g6fe+Z9555Z95t3s9TT937/t535sz5zHvmzJkz7ywYY2aQtfEW/AGfxM3RjIlt8HX8J/ErPAjNiDkKv8W08iv/xEtwFTQdsypejn9jrvJTH8b10XTEBvg4xor+Da/Ez5PXKt/HXdC0ZA/8GGMFf4p7odgUn8f4np/xJDRDchr+grFin8LFmLIG3oDxvfJG1N9NIYvwdowVqfb/KlwN69Aerz0/fvYF1DdlZaiHdR5eNMAzcT3sJVviqxgr8Hs8GkvYGXUMiMvQseIArGMj/A7j53K+jL3jUPwa48a+jdtjE9QLUm8oLusPvABzXdVjML5/kEuwF6gyLsW/MG7kfbgODoOWq/MCnR/E5T6I62LKMozvG2Qvzr61pz6CceN+x3OxCw5GnSnHdbyLO2JFDOBePC7xNUz/PvMB7IYfYLpR8jPcF7tElaV2O67rRzweRQzgYkyJO8pMB3AK5norz+LGOArWxNswrlNeiypT+lovA1Al3IzphlReh+Pory/H3PlF7AD0LoDN8CVMN0KqGTgBx8nu+CHGsqT2KoAD8UtMN0C+h0txEmiM6VGMZarsRQDqCmpDcl3BhzB2BceNRlkvw1wXeOYDUOWqktNCS4VxIU7TuP2R+A2m5TwZU2YqgJ1QzUtaYKlmSM3RNLIVvogq5wMYd5CZCeBE1IE1LazUxulAPO1oiCE34Df1AagLqa5kWshKdT3VBZ1lpjqATfA5TAsodbKlE5w+MLUB7IcaPkgLJzXMoOGGvhAD6GqsqhXno4Z404JJFbZvF8bvxridd+FaOHY0RHw/xgKpP62h5WnqYnbFrpibEqM5Slvj2NgB38FYEI2lHIZ9Zjt8E+O2KxidS4wcXTXSdMBYAF1G1OXEeUDTInPNka5Za+6Szq47Z3W8GnMTo+5AXUifN85GXTiK9fEYapypMzbEpzGuSEO6p+M8sw9qjlKsm49Qc5paszfmVqDJUnui+W8HfQZjHWkH1dymoan7ij2BnX7FeoCa6Gsw10RrjlOjJloHmXswLkjeiYMmRs07apJz9fYKboErRd2stzC3EKlZYaYeTQrL1ZtUN11zn2rRH+vm3lc6gMEMCkDqRFXXQlZAI5m5yv8k/N8BDCYGoOvOuaGaFcbINJ7xK1Zv0L/PQlV4+kEHMJgYgIbh98c4WJmd96TKVTv1BlZz7x1AM3IBCM3M1gClRhFuxeKxMgfQjLoAhsYBNMMBTBgHMGEcwIRxABPGAUwYBzBhHMCEmekAjsXcfbldO8r5PDMdQJz4NCp1L/CocAAFOoAaHECGSQagdaX36bYxvU/YAdQQA+hy9nF6YckB1OAAMjiAZjiAGhxAAQ4ggwNohgOowQEU4AAyOIBmOIAaHEABDiCDA2jGXAeg3/08HHM/quoACmgTwLaoH3fV53R/VgzBARTQJoBzMP3sIZjiAApoE4B+A66ah6/7HHTjXIoDKKDtMUAh6MZC/fBSxAEU0DaAQTiAAhxABgfQDAdQgwMowAFkcADNcAA1OIACHEAGB9AMB1CDAyjAAWRwAM1wADU4gAIcQIYYwPWoJ1ePwvh8GT1WKve+YfwCq+X+9P9ro/AMTLeh8wBsM1sHcCrmFmzLvAlboce75p65ZcusntLXCl3q05OG9PhwW+YVeAQaY4wxxpgMCwv/AnRsCIxt2RfbAAAAAElFTkSuQmCC" alt="Home Icone"/>
                Home</a>
                <a href="/search">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAU4SURBVHhe7ZzZq31jGMcPoswZI7kiLkwJyZjMbqTEP4FwJUqJxIXM3CEyZ05Kmafk2nRD5nm6M4bvp36rVqvve/Y+e1jv++zzfOpTp7P3Xvt5nr32Xu+41pIkSZIkSZIkSZJkFnaUZ8kr5f3yXfmJ/EX+uUX+5n88dp/kuWfKHWQyA3vLy+WbkgL/N6O89nV5meSYyQROks/Jv6Qr6DxyzKcl75EMOEW+IV3hluFr8mS56dlXPihdkZbtv/IBuY/clFwguXi64owpMZwnNw3byTukK0bJb+RD8hJJ6+ZAuZvcdov8zf94jOc8LHmNO5aTb8OtkthWmp3lS9IVYegP8hZ5tJwVXnub5FjuPYa+KHeSK8me8j3pEu/7hbxYbi8XBf0Bvhkc271nX2Ik1pViF0knySXcSZv9WrnIwg/h2NfLSX0LYl2ZThy/qy9Ll2jn+/JQORa810fSxdLJT+VKXBPulC7BzkdkjbON3/rHpIupk2tQaM6XLrHO2+VWshZbS2JwsSGto7BNVDo4v0qXGPLNaIW7pYsR6SfsJcNBu90lhDxW88wfso18VLpYkVHYUDC2w9fXJfOBbLGFwbB36cJMLifKMJQG1v6Qh8hWOVyWmqivyhAw3OsSwOtk69wgXex4gmwexvNd8PRCl9nJWhT8PH4lXQ5PyaZh1ulv6YK/SEaBGTSXA5M6TbeImEZ0gf8oI5z9HcRKzC4XxpSahTlcF3TEHmWpg9bsxZhmXKkFcZSMxjHS5UJLrslvM0tHXMBMjESEjuJ30uV0umwO1uK4YOn1RoWBQpfTFbI56K67YJu+aE2g1Bpi8VdzvCNdsMzTRuVs6XJ6WzbHZ9IFe4CMChP9LqdPZXP8LF2wrFiIyh7S5UQfoTlKTdDI03rE7nKiKdocpfWc+QGMxG/SBZs/QSPxuXTB5kV4JGiauWDpIUflHOlyeks2R2mVc3bERuJq6YLNoYiROEO6YL+VEWEw7nvpcmpyMG5X+Y90Ac+zwrkWx0qXy++y2cklNsS5oFkiHo3SHgbWuTbLqkxJMjH/k3S5sHS+WfaXpUn5SK2hUuuH4Zbm9w48I13wX8oIa+5ZNf21dDk0vywFGP93wSObI1rnRulix+NlCOgpugQYxBpzI8ZGOUKWBhXZsBEGFue6JPBDyQqK1mAD4cfSxczi3BDLEvuUepHIYywJbwVieVa6WPFeGQ52wa+3EZtNEa2w3gYNZvpCbtCAC6VLqpPVZ2wTqgVn/l3SxYb89JwrQ7Negvi4rLE5mvd8QrqYOm+SoSHJ0nrRvuxMOUyOxZGydMHtfF6G3qY6bfE76WWyOWKZLSRiop1fWkDQGX6j9kaL35ceM0MBiywAHyrHLG286EvxmQsOyzzF78sNNhiRZJXyLDsqeQ1DyhyjtGZp6AuyxT7K1ExTfB6ftHt+KKuU6TtwFrNc8CDJagt+o3F3ebDkMZ7DltPSZIqT1s7NklvfhGXa4vM84IZN623kHkuGncM3NTda/A5203NzJff8ZctZz+R6+FvTzFr8PtxAb9IxFukr8jgZnkUUv8+p8klZmluex+62lWGGlCex6OL32U9eKtkQN8+HwQQ6ZzvTiKGblkOWWfwhDBOfJq+S3GaSuQb2IjDQx1lNp4oLKbcuZpPIPZJ1OywdiTQPPTVjFj8ZkMWvSBa/Iln8imTxK5LFr0gWvyJZ/Ipk8SuSxa9IFr8iWfyKMKWXxa/MNdIVHrP4I+E+hCz+yPQ/hCx+JfgQsviVCb0mMkmSJEmSJEmSJNmUrK39DxrzvvYiSVFfAAAAAElFTkSuQmCC" alt="Search Icone"/>
                Search</a>
                <a href="/about">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAIxSURBVHhe7dw9ypRNEEbhAdGVGLlKEyPxB92MuART3YOpqJEKWs2LKHrPdMPp560Rz4Er7JqPKvEzek5mZmZmZmZmZmYXelCelXflc/n+nxs7GLsYOxm7Oay75UX5WtJ/iG5287KMXW3tTnlV0o/qb6/LvbKtxyX9kM4bf1ts6X75UtKP6LxvZcv/Ex6V9AOae1pwb0oarrm3Bfe+pOGa+1hwH0oarjU4D8DgPACD8wAMzgMwOA/A4DwAg/MADO7aDjArvemE8wAMzgMwOA/A4DwAg/MADM4DMDgPwOCu7QD/GpwHYHAegMF5AAbnARicB2BwHoDBeQAGd20HmJXedMJ5AAb3qaTBXWalN51waWinWelNJ1wa2mlWetMJl4Z2mpXedMKloZ1mpTedcGlop1npTSdcGtppVnrTCZeGdpqV3nTCpaGdZqU3nXBpaKdZ6U0nXBraaVZ60wmXhnaald50wqWhnWalN51waWinWelNJ1waqnW4NFTrcGmo1uHSUK3DpaFah0tDtQ6XhmodLg3VOlwaqjVbPtiUBmvNlk+WpcFa86Tg0mDNja/obvlsZRquuedlS2m4Ltv66eL0A8rGXzvjT/7Wj3enH9Iv45+a41874yu5h3y+Pv3oqofFYGmxK1z+ptJyZ1z+xtKCL3H5m0tLPsflH1BadOLyDyot+08u/8DSwn/n8g8uLf0nl38LpcUPLv+WcvnNufzmXH5zLr85l9+cyzczM9ve6fQD67iBeTRJ+xoAAAAASUVORK5CYII=" alt="About Icone"/>
                About</a>
                <a href="">
                <span>
                    <img src={require("../Images/params.png")} onClick={props.logOut} alt="parammetter Icone"/>
                    Logout!
                </span>
            </a>  
                
            </div>
        </div>

    </div>
);

export default Navbar;