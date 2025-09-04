import { toast } from "react-toastify";

class FeatureService {
  constructor() {
    // Initialize ApperClient with Project ID and Public Key
    const { ApperClient } = window.ApperSDK;
    this.apperClient = new ApperClient({
      apperProjectId: import.meta.env.VITE_APPER_PROJECT_ID,
      apperPublicKey: import.meta.env.VITE_APPER_PUBLIC_KEY
    });
    this.tableName = 'feature_c';
  }

  async getAll() {
    try {
      const params = {
        "fields": [
          {
            "field": {
              "Name": "Name"
            }
          },
          {
            "field": {
              "Name": "Tags"
            }
          },
          {
            "field": {
              "Name": "icon_c"
            }
          },
          {
            "field": {
              "Name": "title_c"
            }
          },
          {
            "field": {
              "Name": "description_c"
            }
          }
        ],
        "orderBy": [
          {
            "fieldName": "Id",
            "sorttype": "ASC"
          }
        ],
        "pagingInfo": {
          "limit": 50,
          "offset": 0
        }
      };
      
      const response = await this.apperClient.fetchRecords(this.tableName, params);
      
      // IMPORTANT: Handle top-level failure first
      if (!response.success) {
        console.error("Error fetching features:", response.message);
        toast.error(response.message);
        return [];
      }
      
      // IMPORTANT: Handle empty or non-existent data
      if (!response.data || response.data.length === 0) {
        return [];
      }

      // Map database fields to UI expected format
      return response.data.map(item => ({
        Id: item.Id,
        Name: item.Name,
        Tags: item.Tags,
        icon: item.icon_c,
        title: item.title_c,
        description: item.description_c
      }));
    } catch (error) {
      if (error?.response?.data?.message) {
        console.error("Error fetching features:", error?.response?.data?.message);
        toast.error(error?.response?.data?.message);
      } else {
        console.error("Error fetching features:", error);
        toast.error("Failed to load features");
      }
      return [];
    }
  }

  async getById(id) {
    try {
      const params = {
        fields: [
          {
            "field": {
              "Name": "Name"
            }
          },
          {
            "field": {
              "Name": "Tags"
            }
          },
          {
            "field": {
              "Name": "icon_c"
            }
          },
          {
            "field": {
              "Name": "title_c"
            }
          },
          {
            "field": {
              "Name": "description_c"
            }
          }
        ]
      };
      
      const response = await this.apperClient.getRecordById(this.tableName, parseInt(id), params);
      
      // IMPORTANT: Handle top-level failure first
      if (!response.success) {
        console.error("Error fetching feature:", response.message);
        toast.error(response.message);
        return null;
      }
      
      // IMPORTANT: Handle non-existent data
      if (!response.data) {
        return null;
      }

      // Map database fields to UI expected format
      return {
        Id: response.data.Id,
        Name: response.data.Name,
        Tags: response.data.Tags,
        icon: response.data.icon_c,
        title: response.data.title_c,
        description: response.data.description_c
      };
    } catch (error) {
      if (error?.response?.data?.message) {
        console.error(`Error fetching feature with ID ${id}:`, error?.response?.data?.message);
        toast.error(error?.response?.data?.message);
      } else {
        console.error(`Error fetching feature with ID ${id}:`, error);
        toast.error("Failed to load feature");
      }
      return null;
    }
  }
}

export default new FeatureService();