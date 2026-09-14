# Emergent Auth Testing Playbook

## Auth-Gated App Testing Playbook

### Step 1: Create Test User & Session
```
mongosh --eval "
use('test_database');
var userId = 'test-user-' + Date.now();
var sessionToken = 'test_session_' + Date.now();
db.users.insertOne({
  user_id: userId,
  email: 'test.user.' + Date.now() + '@example.com',
  name: 'Test User',
  picture: 'https://via.placeholder.com/150',
  created_at: new Date()
});
db.user_sessions.insertOne({
  user_id: userId,
  session_token: sessionToken,
  expires_at: new Date(Date.now() + 7*24*60*60*1000),
  created_at: new Date()
});
print('Session token: ' + sessionToken);
print('User ID: ' + userId);
"
```

### Step 2: Test Backend API
```
# Test auth endpoint
curl -X GET "$BACKEND_URL/api/auth/me" \
  -H "Authorization: Bearer YOUR_SESSION_TOKEN"

# Test protected endpoints
curl -X GET "$BACKEND_URL/api/user/favorites" \
  -H "Authorization: Bearer YOUR_SESSION_TOKEN"
```

### Step 3: Browser Testing
```
await page.context.add_cookies([{
    "name": "session_token",
    "value": "YOUR_SESSION_TOKEN",
    "domain": "branding-suite-6.preview.emergentagent.com",
    "path": "/",
    "httpOnly": True,
    "secure": True,
    "sameSite": "None"
}])
await page.goto("$FRONTEND_URL/akun")
```

### Success indicators
- `/api/auth/me` returns user data
- `/akun` loads without redirect to /login
- CRUD operations work

### Failure indicators
- "User not found" errors
- 401 Unauthorized
- Redirect to /login
