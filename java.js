window.fbAsyncInit = function() {
    FB.init({
        appId      : 'YOUR_APP_ID',
        cookie     : true,
        xfbml      : true,
        version    : 'v12.0'
    });
    
    // Render Facebook login button
    FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
            // User is logged into Facebook and your app
            console.log('User already logged in');
        } else {
            // User is not logged into Facebook, render login button
            renderLoginButton();
        }
    });
};

// Render Facebook login button
function renderLoginButton() {
    FB.login(function(response) {
        if (response.authResponse) {
            // User is logged in with Facebook
            console.log('User logged in');
            // You can now perform actions with the user's Facebook data
            // For example, fetch user information
            fetchUserInfo();
        } else {
            // User cancelled login or did not authorize your app
            console.log('User cancelled login or did not authorize your app');
        }
    }, {scope: 'public_profile,email'});
}

// Fetch user information
function fetchUserInfo() {
    FB.api('/me', {fields: 'name,email'}, function(response) {
        console.log('User information:', response);
        // You can now use the user information as needed
        // For example, you can submit the user's email and Facebook ID to your server for login
        // You may also want to redirect the user to a different page after successful login
    });
}  window.fbAsyncInit = function() {
            FB.init({
                appId      : 'YOUR_APP_ID',
                cookie     : true,
                xfbml      : true,
                version    : 'v12.0'
            });
            
            // Render Facebook login button
            FB.getLoginStatus(function(response) {
                if (response.status === 'connected') {
                    // User is logged into Facebook and your app
                    console.log('User already logged in');
                } else {
                    // User is not logged into Facebook, render login button
                    renderLoginButton();
                }
            });
        };

        // Render Facebook login button
        function renderLoginButton() {
            FB.login(function(response) {
                if (response.authResponse) {
                    // User is logged in with Facebook
                    console.log('User logged in');
                    // You can now perform actions with the user's Facebook data
                    // For example, fetch user information
                    fetchUserInfo();
                } else {
                    // User cancelled login or did not authorize your app
                    console.log('User cancelled login or did not authorize your app');
                }
            }, {scope: 'public_profile,email'});
        }

        // Fetch user information
        function fetchUserInfo() {
            FB.api('/me', {fields: 'name,email'}, function(response) {
                console.log('User information:', response);
                // You can now use the user information as needed
                // For example, you can submit the user's email and Facebook ID to your server for login
                // You may also want to redirect the user to a different page after successful login
            });
        }