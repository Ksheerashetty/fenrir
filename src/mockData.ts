export const mockScans = [
    {
        id: '1',
        name: 'External Pentest',
        type: 'Web Audit',
        status: 'Completed',
        progress: 100,
        vulnerabilities: { critical: 0, high: 2, medium: 5, low: 10 },
        lastScan: '2 hours ago'
    },
    {
        id: '2',
        name: 'Internal Network Scan',
        type: 'Infrastructure',
        status: 'Failed',
        progress: 45,
        vulnerabilities: { critical: 1, high: 5, medium: 0, low: 2 },
        lastScan: '5 mins ago'
    },
    {
        id: '3',
        name: 'Internal Network Scan',
        type: 'Infrastructure',
        status: 'Failed',
        progress: 45,
        vulnerabilities: { critical: 1, high: 0, medium: 0, low: 1 },
        lastScan: '5 hours ago'
    },
    {
        id: '4',
        name: 'Internal Network Scan',
        type: 'Infrastructure',
        status: 'Failed',
        progress: 45,
        vulnerabilities: { critical: 1, high: 1, medium: 0, low: 2 },
        lastScan: '56 mins ago'
    },
    {
        id: '5',
        name: 'Internal Network Scan',
        type: 'Infrastructure',
        status: 'Completed',
        progress: 45,
        vulnerabilities: { critical: 0, high: 0, medium: 0, low: 2 },
        lastScan: '45 mins ago'
    },
];