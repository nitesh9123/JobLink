export interface Job {
    id: string;
    title: string;
    company: string;
    location: string;
    salary: string;
    type: string;
    tags: string[];
    logo: string;
    isNew?: boolean;
    postedTime?: string;
    status?: 'Interview' | 'Applied' | 'Rejected' | 'Offer' | 'Closed' | 'Saved';
    matchPercentage?: number;
}

export interface Notification {
    id: string;
    type: 'view' | 'message' | 'match' | 'system';
    title: string;
    message: string;
    time: string;
    read: boolean;
}
