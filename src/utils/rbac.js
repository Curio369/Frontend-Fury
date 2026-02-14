// Role-Based Access Control (RBAC) Configuration

export const ROLES = {
  STUDENT: 'student',
  FACULTY: 'faculty',
  AUTHORITY: 'authority',
  ADMIN: 'admin'
};

export const PERMISSIONS = {
  // Grievance permissions
  VIEW_OWN_GRIEVANCES: 'view_own_grievances',
  VIEW_ALL_GRIEVANCES: 'view_all_grievances',
  SUBMIT_GRIEVANCE: 'submit_grievance',
  UPDATE_GRIEVANCE_STATUS: 'update_grievance_status',
  ASSIGN_GRIEVANCE: 'assign_grievance',
  DELETE_GRIEVANCE: 'delete_grievance',
  VIEW_ANONYMOUS_SUBMITTER: 'view_anonymous_submitter',

  // Dashboard permissions
  VIEW_STUDENT_DASHBOARD: 'view_student_dashboard',
  VIEW_FACULTY_DASHBOARD: 'view_faculty_dashboard',
  VIEW_AUTHORITY_DASHBOARD: 'view_authority_dashboard',
  VIEW_ADMIN_DASHBOARD: 'view_admin_dashboard',

  // System permissions
  MANAGE_USERS: 'manage_users',
  VIEW_ANALYTICS: 'view_analytics',
  SYSTEM_SETTINGS: 'system_settings',
  SEND_NOTIFICATIONS: 'send_notifications',

  // Academic permissions
  VIEW_OWN_COURSES: 'view_own_courses',
  MANAGE_COURSES: 'manage_courses',
  VIEW_ALL_ACADEMIC_DATA: 'view_all_academic_data'
};

// Role to Permissions Mapping
export const ROLE_PERMISSIONS = {
  [ROLES.STUDENT]: [
    PERMISSIONS.VIEW_OWN_GRIEVANCES,
    PERMISSIONS.SUBMIT_GRIEVANCE,
    PERMISSIONS.VIEW_STUDENT_DASHBOARD,
    PERMISSIONS.VIEW_OWN_COURSES
  ],

  [ROLES.FACULTY]: [
    PERMISSIONS.VIEW_OWN_GRIEVANCES,
    PERMISSIONS.SUBMIT_GRIEVANCE,
    PERMISSIONS.VIEW_ALL_GRIEVANCES,
    PERMISSIONS.UPDATE_GRIEVANCE_STATUS,
    PERMISSIONS.VIEW_FACULTY_DASHBOARD,
    PERMISSIONS.VIEW_OWN_COURSES,
    PERMISSIONS.MANAGE_COURSES
  ],

  [ROLES.AUTHORITY]: [
    PERMISSIONS.VIEW_ALL_GRIEVANCES,
    PERMISSIONS.UPDATE_GRIEVANCE_STATUS,
    PERMISSIONS.ASSIGN_GRIEVANCE,
    PERMISSIONS.VIEW_AUTHORITY_DASHBOARD,
    PERMISSIONS.VIEW_ANALYTICS,
    PERMISSIONS.VIEW_ALL_ACADEMIC_DATA,
    PERMISSIONS.SEND_NOTIFICATIONS
  ],

  [ROLES.ADMIN]: [
    // Admins have all permissions
    ...Object.values(PERMISSIONS)
  ]
};

// Helper function to check if a role has a specific permission
export const hasPermission = (role, permission) => {
  if (!role || !permission) return false;
  return ROLE_PERMISSIONS[role]?.includes(permission) || false;
};

// Helper function to check if user has any of the given permissions
export const hasAnyPermission = (role, permissions) => {
  if (!role || !permissions || !Array.isArray(permissions)) return false;
  return permissions.some(permission => hasPermission(role, permission));
};

// Helper function to check if user has all of the given permissions
export const hasAllPermissions = (role, permissions) => {
  if (!role || !permissions || !Array.isArray(permissions)) return false;
  return permissions.every(permission => hasPermission(role, permission));
};

// Get role display name
export const getRoleDisplayName = (role) => {
  const roleNames = {
    [ROLES.STUDENT]: 'Student',
    [ROLES.FACULTY]: 'Faculty Member',
    [ROLES.AUTHORITY]: 'University Authority',
    [ROLES.ADMIN]: 'System Administrator'
  };
  return roleNames[role] || 'Unknown Role';
};

// Get role color for UI
export const getRoleColor = (role) => {
  const roleColors = {
    [ROLES.STUDENT]: 'blue',
    [ROLES.FACULTY]: 'green',
    [ROLES.AUTHORITY]: 'purple',
    [ROLES.ADMIN]: 'red'
  };
  return roleColors[role] || 'gray';
};
