import {AssignmentShape, ClassificationShape} from "../store/AppState";


interface Hits {
    [index: string]: number
}

export interface NodeLinkData {
    max: number[];
    nodes: {
       id: string;
       depth: number;
       hits: number;
       label?: string;
    }[];

    links: {
      source: string;
      target: string;
      hits: number;
    }[];
}

export function buildHierarchyData(ids: number[],
                                   materials: AssignmentShape[],
                                   classifications: ClassificationShape): NodeLinkData {
    let hits: Hits = {};
    let selectedMaterials = materials.filter(function (e) {
        return ids.includes(e.pk);
    });

    // Bubble up hits from child nodes to parent
    for (let material of selectedMaterials) {
        let selectedCls = material.fields.classifications;
        for (let cls of selectedCls) {
            let current = classifications[cls];
            while (current !== undefined) {
                if (hits[current.id] !== undefined) {
                    hits[current.id]++;
                } else {
                    hits[current.id] = 1;
                }
                if (current.parent === undefined)
                    break;
                current = classifications[current.parent];
            }
        }
    }

    let data: NodeLinkData = {
        max: [],
        nodes: [],
        links: []
    };

    for (let key in classifications) {
        let cls = classifications[key];
        let value = hits[cls.id] !== undefined ? hits[cls.id] : 0;
        let label = "";
        if (cls.parent === undefined) {
            data.nodes.push({
                id: cls.id,
                depth: cls.depth,
                hits: value,
                label: label,
            });
        } else {
            let parent = classifications[cls.parent];
            if(hits[parent.id] !== 0 && hits[parent.id] !== undefined) {
                data.nodes.push({
                    id: cls.id,
                    depth: cls.depth,
                    hits: value,
                    label: label,
                });

                data.links.push({
                    source: cls.id,
                    target: parent.id,
                    hits: value,
                });

                data.max[cls.depth] = data.max[cls.depth] > value ? data.max[cls.depth] : value;
            }
        }
    }

    return data;
}