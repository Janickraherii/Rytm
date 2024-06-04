from django.db import models

class Task(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    completed = models.BooleanField(default=False)
    due_date = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True)
    time_spent = models.IntegerField(default=0)

    def __str__(self):
        return self.title
