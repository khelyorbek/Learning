const bannedHashTags = new Set(['nofilter','justsaying','winning','yolo']);

bannedHashTags.add('bestlife');

function filterHashTags(tags){
    const bannedHashTags = new Set(['nofilter','justsaying','winning','yolo']);
    return tags.filter((tag) => !bannedHashTags.has(tag));
}

// Example 2: Removing duplicates from an array
const ages = [45,42,21,23,24,98,2,4,4,12,3,12,45];
[...new Set(ages)];

