from projects.models import Project
from rest_framework import viewsets, permissions
from .serializers import ProjectSerializer

class ProjectViewSet(viewsets.ModelViewSet):
    # queryset = Project.objects.all()
    permission_classes = [ permissions.IsAuthenticated ]
    serializer_class = ProjectSerializer

    def get_queryset(self):
        return self.request.user.projects.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)