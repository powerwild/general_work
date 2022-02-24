"""changed city length constraint

Revision ID: 679f5aa6dd1e
Revises: 7d1fc948af69
Create Date: 2022-02-24 10:23:27.401337

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '679f5aa6dd1e'
down_revision = '7d1fc948af69'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('publishers', 'city',
               existing_type=sa.VARCHAR(length=50),
               type_=sa.String(length=100),
               existing_nullable=True)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('publishers', 'city',
               existing_type=sa.String(length=100),
               type_=sa.VARCHAR(length=50),
               existing_nullable=True)
    # ### end Alembic commands ###
